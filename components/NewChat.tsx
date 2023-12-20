import { PlusIcon } from '@heroicons/react/24/solid'


function NewChat() {
  return (

    <div className="border-4 border-indigo-500/100  text-gray-300 rounded-lg px-5 py-3 text-sm flex items-center justify-center
    space-x-2 hover:bg-gray-700/70 cursor-pointer  transition-all duration-200 ease-out">
        <PlusIcon className="h-6 w-4" />
        <p>New Chat</p>
    </div>
  )
};
    {/*border-slate-50 text-gray-300 order-slate-100 border-4 rounded-lg px-5 py-3 text-sm flex items-center justify-center
  space-x-2 hover:bg-gray-700/70 cursor-pointer  transition-all duration-200 ease-ou*/}
export default NewChat;