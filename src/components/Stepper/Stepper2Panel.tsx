import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const contracts = [
  {
    token_key: '',
    meta_contract_id: '7e432bcd-0ca5-4f6d-8c63-2c9474ca1676',
    public_key: 'a',
  },
  {
    token_key: '',
    meta_contract_id: 'cfcb1bd4-4931-11ee-be56-0242ac120002',
    public_key: 'a',
  },
]

const CheckIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const Stepper2Panel = () => {
  const [selected, setSelected] = useState(contracts[0])

  return (
    <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <div className="relative flex items-center w-3/4 mx-auto">
        <input
          type="text"
          className="w-full border-gray-200 p-3 pe-12 text-sm shadow-sm mr-3"
          placeholder="Meta Contract ID"
        />
      </div>
      <div className="mt-4">
        <RadioGroup value={selected} onChange={setSelected} className="">
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-3 gap-4">
            {contracts.map((contract, index) => (
              <RadioGroup.Option
                key={contract.meta_contract_id}
                value={contract}
                className={({ active, checked }) =>
                  `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
              ${checked ? 'bg-indigo-600 bg-opacity-75 text-white' : 'bg-white'}
                relative flex cursor-pointer px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {contract.meta_contract_id}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>{contract.public_key}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default Stepper2Panel
