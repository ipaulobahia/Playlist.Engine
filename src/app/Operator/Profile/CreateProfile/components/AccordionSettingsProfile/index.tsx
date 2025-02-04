import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAKE_CONFIG_PROFILE } from "@/utils/fakeData"
import { AccordionContentOptions } from "./components"

export const AccordionSettingsProfile = () => {
  return (
    <Accordion className="space-y-8" type="multiple">
      {
        FAKE_CONFIG_PROFILE.map(({ id, description, name, options }) => {
          return (
            <AccordionItem key={id} value={id.toString()}>
              <AccordionTrigger className="justify-between px-4 py-6 mx-auto border rounded-t-md border-muted-foreground/25 sm:flex sm:px-6 hover:no-underline">
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold tracking-tight">{name}</h1>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col items-center gap-4 px-4 py-8 gap-x-4 border-muted-foreground/25 border-x sm:px-6">
                {options.map((option) => <AccordionContentOptions option={option} key={option.id} />)}
              </AccordionContent>
            </AccordionItem>
          )
        })
      }
    </Accordion>
  )
}