import Image from "next/image"

const ButtonBrand = (props) => {
  return (
    <button className= {`${props.style} bg-brand-default text-[16px] text-white py-[20px] px-[40px] rounded-[24px] shadow-[0_2px_8px_rgba(0, 0, 0, 0.05)] flex justify-center items-center`} >
      {props.content}
      <Image src={props.icon} alt={props.alt} className="object-contain" />
    </button>
  )
}

export default ButtonBrand