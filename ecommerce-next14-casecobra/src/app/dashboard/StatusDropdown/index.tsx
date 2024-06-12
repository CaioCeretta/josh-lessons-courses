'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { OrderStatus } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { changeOrderStatus } from './actions'
import { useRouter } from 'next/navigation'

/* here we are saying that only the 3 types determined on the prisma schema are valid object keys */
const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: 'Awaiting Shipment',
  fulfilled: 'Fullfilled',
  shipped: 'Shipped',
}

const StatusDropdown = ({
  id,
  orderStatus,
}: {
  id: string
  orderStatus: OrderStatus
}) => {
  const router = useRouter()

  const { mutate: changeStatus } = useMutation({
    mutationKey: ['change-order-status'],
    mutationFn: changeOrderStatus,
    onSuccess: () => {
      router.refresh()
    },
  })

  return (
    <div>
      <DropdownMenu>
        {/* When we use the asChild pattern , causes the component to render its children directly instead of wrapping
        then inside another elemen. This is useful for creating higher-order components that can modify behavior or
        styling without altering the structure of the HTML
        
        in this case the asChild is useful because we want to define the button ourselves and do not want it to be wrapped
        in another button, so whatever the child is, it will now be used as the trigger
        */}
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="flex w-52 items-center justify-between"
          >
            {LABEL_MAP[orderStatus]}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0 ">
          {Object.keys(OrderStatus).map((status) => (
            <DropdownMenuItem
              key={status}
              className={cn(
                `flex cursor-default items-center gap-1 p-2.5 text-sm
                hover:bg-zinc-100`,
                {
                  'bg-zinc-100': orderStatus === status,
                },
              )}
              onClick={() =>
                changeStatus({ id, newStatus: status as OrderStatus })
              }
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4 text-primary',
                  orderStatus === status ? 'opacity-100' : 'opacity-0',
                )}
              />
              {LABEL_MAP[status as OrderStatus]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default StatusDropdown
