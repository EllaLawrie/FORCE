type Props = {
  src?: string
}

const VideoPlayer = ({
  src = 'https://www.youtube.com/watch?v=xZI6nnugAE0'
}: Props) => {
  return (
    <section className='lg:h-[400px]  h-[251px]  rounded-[2.94872px] overflow-hidden'>
      <video controls className='h-full'>
        <source src={src} type='video/mp4' />
      </video>
    </section>
  )
}

export default VideoPlayer
