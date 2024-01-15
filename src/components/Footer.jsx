export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className='pt-6'>
      <div className='flex items-center justify-center gap-2 px-5 py-6 mx-auto text-sm border-t max-w-7xl lg:px-0 text-slate-400'>
        <div>&copy; {currentYear} Video Gallery</div>
      </div>
    </section>
  )
}
