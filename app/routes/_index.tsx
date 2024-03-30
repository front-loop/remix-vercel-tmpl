import type { MetaFunction } from '@vercel/remix'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <h1 className="font-serif text-3xl text-slate-700">
        Welcome to{' '}
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="hover:underline">
          Remix@Vercel
        </a>
      </h1>
    </div>
  )
}
