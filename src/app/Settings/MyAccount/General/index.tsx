import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const General = () => {
  return (
    <div className="flex flex-1 p-5">
      <div className="justify-center w-full max-w-full mx-auto lg:max-w-3xl">
        <div>
          <header className="justify-between px-4 py-6 mx-auto border rounded-md border-muted-foreground/25 sm:flex sm:px-6">
            <div className="flex items-center w-full">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Geral</h1>
                <p className="text-sm text-muted-foreground">Gerencie as configurações gerais do seu Playlist</p>
              </div>
            </div>
          </header>
          <div className="px-4 pt-8 pb-10 border-muted-foreground/25 border-x sm:px-6">
            <div className="grid grid-cols-3 border rounded-md rounded-b-none border-muted-foreground/25 bg-accent">
              <div className="flex items-center col-span-2 px-3 py-1.5">
                <span className="text-sm font-semibold">Opções</span>
              </div>
              <div className="grid items-center grid-cols-3 col-span-1 px-3 py-1.5 text-center">
                <span className="text-sm font-semibold">Padrão</span>
                <span className="text-sm font-semibold">Sim</span>
                <span className="text-sm font-semibold">Não</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-b rounded-md rounded-t-none border-x border-muted-foreground/25">
              <div className="flex flex-col col-span-2 p-3 gap-y-3.5">
                <span className="text-sm font-normal">Personalizar fontes e cores</span>
                <span className="text-sm font-normal">Modo dark</span>
                <span className="text-sm font-normal">Relógio AM/PM</span>
                <span className="text-sm font-normal">Barra de espaço passa para a proxima inserção</span>
                <span className="text-sm font-normal">Travar painéis</span>
                <span className="text-sm font-normal">Bloqueia/desbloqueia blocos</span>
                <span className="text-sm font-normal">Adiciona inserções</span>
                <span className="text-sm font-normal">Remove inserções</span>
                <span className="text-sm font-normal">Move inserções</span>
                <span className="text-sm font-normal">Salva edição de bloco</span>
                <span className="text-sm font-normal">Visualiza as pastas</span>
                <span className="text-sm font-normal">Toca inserções diretamente das pastas</span>
                <span className="text-sm font-normal">Edita os arquivos de áudio (Marcadores)</span>
                <span className="text-sm font-normal">Edita informações de áudio</span>
                <span className="text-sm font-normal">Converte nomes de arquivos para maiúsculas</span>
                <span className="text-sm font-normal">Usar carimbos de hora-certa e temperatura</span>
              </div>
              <div className="flex flex-col p-3 gap-y-3.5">
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup className="grid grid-cols-3" defaultValue="default">
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="comfortable" id="r2" />
                    </div>
                    <div className="flex items-center justify-center">
                      <RadioGroupItem value="compact" id="r3" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end px-6 py-4 border rounded-b-md border-muted-foreground/25 bg-muted">
            <Button size={'sm'} disabled>
              Atualizar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}