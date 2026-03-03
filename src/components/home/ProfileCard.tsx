import Image from 'next/image'

type ProfileProps={
  name:string;
  role:string;
  email:string;
  location:string;
  gender:string;

}

const ProfileCard = ({name, role , email, location, gender}:ProfileProps) => {
  return (
    <section className='max-w-2xl mx-auto mt-10 px-6' >
      <div className='bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center' >
        <div className='flex justify-center' >
          <Image src='' alt='Profile'width={120} height={120} className='rounded-full object-cover' />
        </div>

        <h2 className='mt-4 text-2xl font-semibold' >{name}</h2>
        <p className='text-neutral-200' >{role}</p>

        <div className='mt-6 space-y-2 text-sm text-neutral 200' >
          <p>Email: {email}</p>
          <p>Location: {location}</p>
          <p>Gender: {gender}</p>
          <p>Time: {new Date().toLocaleDateString()}</p>
        </div>

      </div>
    </section>
  )
}

export default ProfileCard