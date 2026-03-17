import { Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon } from "./ui/input-group";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const UserSchema = z.object({
  email: z.email("Invalid email"),
  username: z.string().min(5, "Username must be at least 5 characters"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

type UserFormData = z.infer<typeof UserSchema>;

export default function SignUpCard() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (formData: UserFormData) => {
    setServerError(null);
    const options = {
      method: "POST",
      url: "https://api.freeapi.app/api/v1/users/register",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        ...formData,
        // email: formData.email,
        // password: formData.password,
        // username: formData.username,
        role: "USER", // The API requires a role
      },
    };

    try {
      const { data } = await axios.request(options);
      toast.success("Account Created Successfully!",{ position: "top-center" });
      console.log("Success:", data);
    } catch (error: any) {
      console.error("Error:", error);
      setServerError(error.response?.data?.message || "Something went wrong!");
    }
  };
console.log( formState.isSubmitting)
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-14 flex justify-center items-center">
      <Card className="bg-white max-w-sm md:max-w-md min-w-xs md:min-w-sm shadow-sm py-6">
        <CardTitle className="text-xl md:text-2xl font-semibold text-secondary-foreground text-center">
          Create Account
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
                <p className="text-red-700 mb-4">{formState.errors.email.message}</p>
              )}
              <Field>
                <Input
                  {...register("username")}
                  placeholder="Username"
                  required
                  className="border rounded-sm text-xs md:text-sm"
                />
              </Field>
              {formState.errors?.username?.message && (
                <p className="text-red-700 mb-4">{formState.errors.username.message}</p>
              )}

              <Field>
                <InputGroup>
                  <Input
                    {...register("password")}
                    placeholder="Password"
                    required
                    className="text-xs md:text-sm"
                  />
                  <InputGroupAddon align="inline-end">
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {formState.errors?.password?.message && (
                <p className="text-red-700 mb-4">{formState.errors.password.message}</p>
              )}

              <Field>
                <InputGroup>
                  <Input
                    {...register("password")}
                    placeholder="Confirm Password"
                    required
                    className="text-xs md:text-sm"
                  />
                  <InputGroupAddon align="inline-end">
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {formState.errors?.password?.message && (
                <p className="text-red-700 mb-4">{formState.errors.password.message}</p>
              )}

              <div className="flex gap-1">
                <Checkbox
                  id="terms-checkbox-basic"
                  name="terms-checkbox-basic"
                />
                <div className="text-xs md:text-sm text-neutral-400 font-normal">
                  Accept all Terms & Conditions
                </div>
              </div>

              {serverError && (
                <p className="text-red-600 text-center mb-4 text-xs md:text-sm">
                  {serverError}
                </p>
              )}

              <Field orientation="horizontal">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  type="submit"
                  className="w-full rounded-full bg-primary text-xs md:text-sm lg:text-base font-medium text-white hover:bg-secondary-foreground"
                >
                  Create Account
                </Button>
              </Field>
              <div className="flex gap-1 justify-center text-xs md:text-sm">
                <p className="text-neutral-400">Already have an account? </p>{" "}
                <NavLink to="/login">
                  <p className="text-secondary-foreground font-medium">Login</p>
                </NavLink>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
