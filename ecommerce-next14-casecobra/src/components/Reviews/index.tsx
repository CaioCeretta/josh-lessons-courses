import MaxWidthWrapper from '../MaxWidthWrapper'
import ReviewGrid from './ReviewGrid'

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt=""
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  )
}
