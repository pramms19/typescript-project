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
    formState: { errors },
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

    try{
        const{data}= await axios.request(options);
        console.log("Success:", data);
        alert("Account created successfully!");
    } catch (error: any){
        console.error("Error:", error);
        setServerError(error.response?.data?.message || "Something went wrong!") 
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-14 flex justify-center items-center">
      <Card className="bg-white max-w-md min-w-sm shadow-sm py-6">
        <CardTitle className="text-2xl font-semibold text-secondary-foreground text-center">
          Create Account
        </CardTitle>
        <CardContent>
             {serverError && <p className="text-red-600 text-center mb-4 text-sm">{serverError}</p>}
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <Input
                  {...register("email")}
                  placeholder="Email"
                  required
                  className="border rounded-sm"
                />
              </Field>
              {errors?.email?.message && (
                <p className="text-red-700 mb-4">{errors.email.message}</p>
              )}
              <Field>
                <Input
                  {...register("username")}
                  placeholder="Username"
                  required
                  className="border rounded-sm"
                />
              </Field>
              {errors?.username?.message && (
                <p className="text-red-700 mb-4">{errors.username.message}</p>
              )}

              <Field>
                <InputGroup>
                  <Input
                    {...register("password")}
                    placeholder="Password"
                    required
                  />
                  <InputGroupAddon align="inline-end">
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {errors?.password?.message && (
                <p className="text-red-700 mb-4">{errors.password.message}</p>
              )}

              <Field>
                <InputGroup>
                  <Input
                    {...register("password")}
                    placeholder="Confirm Password"
                    required
                  />
                  <InputGroupAddon align="inline-end">
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              {errors?.password?.message && (
                <p className="text-red-700 mb-4">{errors.password.message}</p>
              )}

              <div className="flex gap-1">
                <Checkbox
                  id="terms-checkbox-basic"
                  name="terms-checkbox-basic"
                />
                <div className="text-sm text-neutral-400 font-normal">
                  Accept all Terms & Conditions
                </div>
              </div>

              <Field orientation="horizontal">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  className="w-full rounded-full bg-primary text-sm lg:text-base font-medium text-white hover:bg-secondary-foreground"
                >
                  Create Account
                </Button>
              </Field>
              <div className="flex gap-1 justify-center text-sm">
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
