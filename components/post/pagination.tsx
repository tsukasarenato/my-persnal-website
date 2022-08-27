import Link from "next/link"

type PaginationProps = {next: string, previous: string, locale?: string}

export const Pagination = ({next, previous, locale} : PaginationProps) => {

  const label = locale == 'pt' ? 'Ir para a página' : 'Go to the page'
  
  return (
      <div className='flex justify-center space-x-2'>
          <Link href={previous} locale={locale}>
            <a className={" hover:bg-blue-400 bg-blue-500 py-4 sm:py-2 px-4 font-sans text-white text-lg font-medium rounded-full inline-flex"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                1
            </a>
          </Link>
          <p className='py-2 px-4'>{label}</p>
          <Link href={next} locale={locale}>
            <a className={" hover:bg-blue-400 bg-blue-500 py-4 sm:py-2 px-4 font-sans text-white text-lg font-medium rounded-full inline-flex"}>
                2
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>


            </a>
          </Link>
      </div>
  )
}