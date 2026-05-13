import Image from "next/image";

export function FieldBox({name,img,num}:{name:string,img:string,num:number}){
    return <div className={` items-start py-12 justify-between gap-8 flex ${num % 2===0?" ":" flex-row-reverse "}`}>
        <div className="text-white  text-[2rem] font-normal">{name}</div>
        <Image alt="field image" width={500} height={500} className="w-full rounded-2xl max-w-[35rem]" src={`/home/${img}.jpg`} />
    </div>
}