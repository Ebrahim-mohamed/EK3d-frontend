import Image from "next/image";

export function FieldBox({head,des,img,num}:{head:string,des:string,img:string,num:number}){
    return <div className={` items-start py-12 justify-between gap-12 flex ${num % 2===0?" ":" flex-row-reverse "}`}>
        <div>
        <h1 className="text-white  text-[2.5rem] mb-8 font-semibold">{head}</h1>
        <p className="text-white  text-[1.5rem] font-normal">{des}</p>
        </div>
        <Image alt="field image" width={500} height={500} className="w-full rounded-2xl max-w-[35rem]" src={`/home/${img}.jpg`} />
    </div>
}