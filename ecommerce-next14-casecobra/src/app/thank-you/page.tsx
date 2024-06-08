import React, { Suspense } from 'react'
import ThankYou from './ThankYou'

const Page = () => {
  return (
    // React suspense allows us to display a callback until the children finished loading
    <Suspense>
      {/* On the suspense children we need to use a hook that  expects us to put this component in suspense */}
      <ThankYou />
    </Suspense>
  )
}

export default Page
