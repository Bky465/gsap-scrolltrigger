import React from 'react'
import ProjectList from '@/src/components/ProjectList'
import { projects } from '@/src/data'

const page = ({ params }) => {
  const { slug } = params

  const currentIndex = projects.findIndex((p) => p.slug === slug)

  // Handle if slug is not found
  if (currentIndex === -1) {
    return <div>Project not found.</div>
  }

  const project = projects[currentIndex]

  const nextIndex = (currentIndex + 1) % projects.length
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length

  const nextProject = projects[nextIndex]
  const prevProject = projects[prevIndex]

  return (
    <ProjectList
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  )
}

export default page
