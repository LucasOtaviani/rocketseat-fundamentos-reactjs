import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: "d18e5f0e-b7d2-453e-99cd-3ba791c10adb",
    author: {
      photo: "https://github.com/LucasOtaviani.png",
      name: "Lucas Otaviani",
      role: "Back-end Developer"
    },
    content: [
      {
        id: "8d714b92-1ffb-4603-8315-4d512b69b2dd",
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        id: "2f7a90f8-8554-47c3-99d1-f2397e93a12b",
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        id: "cfe17bea-4f8e-439e-9a94-19ff61f80ad5",
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-07-10 20:00:00'),
  },
  {
    id: "826ecf8a-b9c5-49d4-8a87-7e0fac9e10af",
    author: {
      photo: "https://github.com/diego3g.png",
      name: "Diego",
      role: "Educator @ Rocketseat"
    },
    content: [
      {
        id: "f2705777-f222-4ca3-a1e9-418e428bd196",
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        id: "d9911d83-3810-4dee-89d6-be4752fd3907",
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        id: "68abd4f5-d0dd-4743-9da1-b11ec1f99097",
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-07-10 15:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}
