import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src="/profile.jpg"
        alt="Dinraj K Dinesh"
        width={40}
        height={40}
        className="rounded-full border-2 border-white"
      />
      <div className="text-sm leading-tight">
        <p className="font-semibold">Dinraj K Dinesh</p>
        <p className="text-gray-300 text-xs">Full Stack Dev</p>
      </div>
    </div>
  );
}
