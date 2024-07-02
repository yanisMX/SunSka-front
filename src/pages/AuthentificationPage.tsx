import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import HeaderAdmin from "../components/HeaderAdmin.tsx"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "L'identifiant du bar est incorrect.",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit comporter au moins 6 caractères.",
  }),
})

export default function AuthentificationPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data : {username : string, password : string}) => {
    console.log(data)
  }

  return (
    <>
      <HeaderAdmin />
      <div className="flex justify-center items-center min-h-80 m-12 ">
        <div className="border p-12 shadow-lg rounded-md w-full max-w-md">
          <Form {...form}>
            <h1 className="text-center text-xl font-bold ">Connexion</h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Identifiant BAR</FormLabel>
                    <FormControl>
                      <Input placeholder="Bar Lounge, Bar VIP ..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Entrez l'identifiant de votre bar.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Mot de passe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Entrez votre mot de passe.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Connexion</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
