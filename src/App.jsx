import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post
        author="Lucas Otaviani"
        content="Meu primeiro post!"
      />
      <Post
        author="Barinha"
        content="Meu segundo post!"
      />
    </div>
  )
}
