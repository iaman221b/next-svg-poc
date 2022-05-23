import Link from "next/link";
import { EyeExternal } from "../components/Eye";
import { EyeExternalProps } from "../components/Eye";
import EyeFromFile from "../assets/eye.svg";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <div>
        <h2>Using an img tag</h2>
        <img src="https://th.bing.com/th/id/OIP.vm4Ip3BcTsqwZPfSTPE4nAHaHv?pid=ImgDet&rs=1" alt="An SVG of an eye" />
        <h2>Using next/image</h2>
        <Image src="https://th.bing.com/th/id/OIP.vm4Ip3BcTsqwZPfSTPE4nAHaHv?pid=ImgDet&rs=1" height={30} width={30} />
        <h2>Including directly</h2>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>prime</title>
          <g id="4dc291fc-8aac-47e7-9145-5c0baf1f8af9" data-name="eye">
            <circle cx="12" cy="11.88" r="3" />
            <path d="M12,4A13,13,0,0,0,0,12a13,13,0,0,0,24,0A13,13,0,0,0,12,4Zm0,12.88a5,5,0,1,1,5-5A5,5,0,0,1,12,16.88Z" />
          </g>
        </svg>
        <h2>In document component</h2>
        <EyeInternal />
        <h2>Out of document component</h2>
        <EyeExternal />
        <h2>Component with props</h2>
        <EyeExternalProps color="red" />
        <EyeExternalProps color="orange" />
        <EyeExternalProps color="green" />
        <h2>From a file with webpack</h2>
        <EyeFromFile />
      </div>
    </div>
  );
}

const EyeInternal = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
    data-name="Livello 1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>prime</title>
    <g id="4dc291fc-8aac-47e7-9145-5c0baf1f8af9" data-name="eye">
      <circle cx="12" cy="11.88" r="3" />
      <path d="M12,4A13,13,0,0,0,0,12a13,13,0,0,0,24,0A13,13,0,0,0,12,4Zm0,12.88a5,5,0,1,1,5-5A5,5,0,0,1,12,16.88Z" />
    </g>
  </svg>
);
