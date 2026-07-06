import Image from "next/image";

export function FieldBox({head,des,img,num}:{head:string,des:string,img:string,num:number}){
    return <div className={`relative items-start justify-between flex flex-col overflow-hidden rounded-2xl group min-h-[25rem] `}>
        <Image alt="field image" width={500} height={500} className="w-full h-full object-cover rounded-2xl absolute inset-0" src={`/home/${img}.jpg`} />
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-white text-[2.5rem] font-semibold text-center">{head}</h1>
        </div>
    </div>
}