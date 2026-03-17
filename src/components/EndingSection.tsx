import { Field } from "./ui/field";
import { ButtonGroup } from "./ui/button-group";
import { InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";

export default function EndingSection() {
  return (
    <div className="bg-muted px-4 sm:px-6 lg:px-8 mt-14 py-4 md:py-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <img src="/assets/logo.png" alt="Logo" /> */}
          <p className="font-semibold text-secondary-foreground text-xl md:text-3xl">
            Glow
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="text-primary text-2xl font-medium">
            Subcribe our Newsletter
          </div>
          <p className="text-sm text-neutral-400">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>

        <Field className="max-w-2xs md:max-w-xs bg-white rounded-full">
          <ButtonGroup className="flex justify-between [--radius:9999rem]">
            <div className="flex gap-1">
              <InputGroupInput
              className="text-xs md:text-sm"
                id="inline-start-input"
                placeholder="Your Email Address"
              />
            </div>
            <Button className="text-xs md:text-sm">Subscribe</Button>
          </ButtonGroup>
        </Field>
        {/* </div> */}
      </div>
    </div>
  );
}
