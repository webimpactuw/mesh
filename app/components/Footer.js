import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="footer p-4 fixed bottom-0 w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row w-44">
            <div className='px-2'>
              <Link href="https://www.tiktok.com/@mesh.uw">
                <Image
                  src="/tiktok.png"
                  width={40}
                  height={40}
                  alt="TikTok logo"
                />
              </Link>
            </div>
            
            <div className='px-2'>
              <Link href="https://www.youtube.com/channel/UC0975jzGVqESjQXwVENCtAg">
                <Image
                  src="/youtube.png"
                  width={40}
                  height={40}
                  alt="YouTube logo"
                />
              </Link>
            </div>
            
            <div className='px-2'>
              <Link href="https://www.instagram.com/mesh.uw/?hl=en">
                <Image
                  src="/instagram.png"
                  width={40}
                  height={40}
                  alt="Instagram logo"
                />
              </Link>
            </div>
            
          </div>

          <div>
            <Image 
              src="/mesh_icon.png"
              width={65}
              height={60}
              alt="Mesh logo icon"
            />
          </div>

          <div className="w-44 text-right">
            Contact
          </div>
        </div>
      </footer>
    );
}