import React from 'react';
import Image from 'next/image';

export function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <Image src={image} alt={name} width={80} height={80} className="rounded-full mb-2" />
      <div className="font-semibold text-green-700">{name}</div>
      <div className="text-sm text-gray-600">{role}</div>
    </div>
  );
}
