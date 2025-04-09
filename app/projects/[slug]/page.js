import React from 'react'
import ProjectList from '@/src/components/ProjectList'
import { projects } from '@/src/data'

// This generates all possible static paths during build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const Page = ({ params }) => {
  const { slug } = params

  const currentIndex = projects.findIndex((p) => p.slug === slug)

  if (currentIndex === -1) {
    return <div>Project not found.</div>
  }

  const project = projects[currentIndex]
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <ProjectList
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  )
}

export default Page
