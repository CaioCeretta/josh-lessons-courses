/*
  Import type syntax is used to import only the type information from a module, without including any actual code from
  that module, so in the final js, this may help to optimize the code by avoid unnecessary importants and bundle size
*/
import type { Dispatch, SetStateAction } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import Image from 'next/image'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from '../ui/button'

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[99999999999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 h-24 w-24">
            <Image
              src="/snake-1.png"
              alt="Snake Image"
              className="object-contain"
              fill
            />
          </div>
          <DialogTitle
            className="tracking text-center text-3xl font-bold
          text-gray-900"
          >
            Log In to continue
          </DialogTitle>
          <DialogDescription className="py-2 text-center text-base">
            <span className="font-medium text-zinc-900">
              Your configuration was saved!
            </span>{' '}
            Please login or create an account to complete your purchase.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-600">
          <LoginLink className={buttonVariants({ variant: 'outline' })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: 'default' })}>
            Sign Up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
