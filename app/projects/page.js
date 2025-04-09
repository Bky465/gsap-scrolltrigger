import React from 'react'
import Link from 'next/link'
import { projects } from '@/src/data'
const Home = () => {
  return (
    <>
    <ul className='project-list'>
        {
          projects.map((project)=>{
            return(
              <li key={project.id}>
                   <div>
                    <span>&#8594;</span>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                   </div>
            </li>
            )
          })
        }
    </ul>
    </>
  )
}

export default Home