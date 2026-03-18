import { Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon } from "./ui/input-group";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must accept terms & conditions"),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export default function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, control, formState } = useForm<LoginFormData>(
    {
      resolver: zodResolver(LoginSchema),
    },
  );

  const onSubmit = async (formData: LoginFormData) => {
    setServerError(null);
    const options = {
      method: "POST",
      url: "https://api.freeapi.app/api/v1/users/login",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        ...formData,
        role: "USER", // The API requires a role
      },
    };

    try {
      const { data } = await axios.request(options);
      toast.success("Logged In Successfully!", { position: "top-center" });
      console.log("Success:", data);
    } catch (error: any) {
      console.error("Error:", error);
      setServerError(error.response?.data?.message || "Something went wrong!");
    }
  };
  console.log(formState.isSubmitting);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-14 flex justify-center items-center">
      <Card className="bg-white max-w-sm md:max-w-md min-w-xs md:min-w-sm shadow-sm py-6">
        <CardTitle className="text-xl md:text-2xl font-semibold text-secondary-foreground text-center">
          Sign In
        </CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Input
                  {...register("email")}
                  placeholder="Email"
                  required
                  className="border rounded-sm text-xs md:text-sm"
                />
              </Field>
              {formState.errors?.email?.message && (
                <p className="text-red-700 mb-4">
                  {formState.errors.email.message}
                </p>
              )}

              <Field>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    required
                    className="text-xs md:text-sm"
                  />
                  <InputGroupAddon
                    align="inline-end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {formState.errors?.password?.message && (
                <p className="text-red-700 mb-4">
                  {formState.errors.password.message}
                </p>
              )}

              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="terms"
                        name="terms-checkbox-basic"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <div className="text-xs md:text-sm text-neutral-400 font-normal">
                    Remember me
                  </div>
                </div>

                <div className="text-xs md:text-sm text-neutral-400 font-normal">
                  Forgot Password
                </div>
              </div>

              {serverError && (
                <p className="text-red-600 text-center mb-4 text-xs md:text-sm">
                  {serverError}
                </p>
              )}

              <Field orientation="horizontal">
                <Button
                  //   onClick={handleSubmit(onSubmit)}
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full rounded-full bg-primary text-xs md:text-sm lg:text-base font-medium text-white hover:bg-secondary-foreground"
                >
                  {formState.isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Field>
              <div className="flex gap-1 justify-center text-xs md:text-sm">
                <p className="text-neutral-400">Don't have an account? </p>{" "}
                <NavLink to="/register">
                  <p className="text-secondary-foreground font-medium">
                    Register
                  </p>
                </NavLink>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
