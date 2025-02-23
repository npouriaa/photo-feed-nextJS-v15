import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 p-3 text-center border-t bg-white z-10">
      Made by <Link className="text-blue-500" href="https://www.linkedin.com/in/npouriaa" target="_blank">Npouriaa</Link>
    </footer>
  )
}

export default Footer