"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ClientSayProps from "@/types/ClientSayProps";


const ClientSay = ({avtUrl, quote, name, job} : ClientSayProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-4/5 m-auto my-8 border-orange-500 rounded-xl border p-10 bg-orange-200">
      <p className="font-light text-2xl tracking-wider italic text-gray-500 text-center">
        {quote}
      </p>
      <Avatar className="w-10 h-10 dark:invert">
        <AvatarImage src={avtUrl}  className="w-10 h-10"/>
        <AvatarFallback>AVT</AvatarFallback>
      </Avatar>
      <p className="font-bold text-xl">{name}</p>
      <p className="font-light text-xl">{job}</p>
    </div>
  );
};

export default ClientSay;
