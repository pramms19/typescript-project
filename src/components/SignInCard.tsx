import { Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon } from "./ui/input-group";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

export default function SignInCard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-14 flex justify-center items-center">
      <Card className="bg-white max-w-md min-w-sm">
        <CardTitle className="text-2xl font-semibold text-secondary-foreground text-center">
          Sign In
        </CardTitle>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Input
                  placeholder="Email"
                  required
                  className="border rounded-sm"
                />
              </Field>
              <Field>
                <InputGroup>
                  <Input placeholder="Password" required />
                  <InputGroupAddon align="inline-end">
                    <Eye />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Checkbox
                    id="terms-checkbox-basic"
                    name="terms-checkbox-basic"
                  />
                  <div className="text-sm text-neutral-400 font-normal">
                    Remember me
                  </div>
                </div>

                <div className="text-sm text-neutral-400 font-normal">
                  Forgot Password
                </div>
              </div>

              <Field orientation="horizontal">
                <Button className="w-full rounded-full bg-primary text-sm lg:text-base font-medium text-white hover:bg-secondary-foreground">
                  Login
                </Button>
              </Field>
              <div className="flex gap-1 justify-center text-sm">
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
