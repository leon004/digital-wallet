import { UserButton } from "@clerk/nextjs";

export default function 
  Home(){
    return (
      <UserButton 
      afterSignOutUrl="/" 
      />
    )
  }
/// 46:19