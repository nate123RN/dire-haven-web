import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const HomePage = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <div className='bg-white text-gray-800'>
      {/* Hero Section */}
      <section
        className='relative h-[600px] bg-cover bg-center text-white'
        style={{
          backgroundImage:
            'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/home-hero-lrdriqh-1764916548308.webp)',
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 flex h-full flex-col items-center justify-center text-center'>
          <h1 className='text-5xl font-bold md:text-7xl'>
            Experience a New Level of Luxury
          </h1>
          <p className='mt-4 text-lg md:text-xl'>
            Your perfect getaway in the heart of Africa.
          </p>
          <Button className='mt-8 bg-orange-500 hover:bg-orange-600'>
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className='py-20'>
        <div className='container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-4xl font-bold'>About Us</h2>
            <p className='mb-4 text-lg'>
              Karibu! Welcome to Ubuntu Hotel, where we blend modern luxury with
              authentic African hospitality. Our hotel is more than just a place to
              stay; it's a gateway to the vibrant culture and breathtaking
              landscapes of our beautiful continent.
            </p>
            <p className='text-lg'>
              Founded on the principles of community and excellence, Ubuntu Hotel
              offers world-class amenities, exceptional service, and a unique
              cultural experience that will make your stay unforgettable.
            </p>
          </div>
          <img
            src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/about-us-cs6fcqy-1764916555197.webp'
            alt='About Us'
            className='h-auto w-full rounded-lg object-cover shadow-lg'
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className='bg-gray-100 py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-12 text-4xl font-bold'>Gallery</h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <img
              src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/gallery-1-3qxevmr-1764916562221.webp'
              alt='Gallery 1'
              className='h-auto w-full rounded-lg object-cover shadow-lg'
            />
            <img
              src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/gallery-2-6hozfbx-1764916570112.webp'
              alt='Gallery 2'
              className='h-auto w-full rounded-lg object-cover shadow-lg'
            />
            <img
              src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/gallery-3-mkf99cd-1764916578386.webp'
              alt='Gallery 3'
              className='h-auto w-full rounded-lg object-cover shadow-lg'
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-12 text-4xl font-bold'>What Our Guests Say</h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='rounded-lg bg-gray-100 p-8 shadow-lg'>
              <p className='mb-4 text-lg'>
                'An amazing experience! The staff were incredibly welcoming, and the
                food was delicious. I felt right at home.'
              </p>
              <div className='flex items-center justify-center'>
                <img
                  src='https://via.placeholder.com/150'
                  alt='Testimonial 1'
                  className='mr-4 h-12 w-12 rounded-full'
                />
                <p className='font-bold'>Juma K., Nairobi</p>
              </div>
            </div>
            <div className='rounded-lg bg-gray-100 p-8 shadow-lg'>
              <p className='mb-4 text-lg'>
                'Beautiful hotel with stunning views. The perfect blend of luxury
                and culture. I can't wait to come back!'
              </p>
              <div className='flex items-center justify-center'>
                <img
                  src='https://via.placeholder.com/150'
                  alt='Testimonial 2'
                  className='mr-4 h-12 w-12 rounded-full'
                />
                <p className='font-bold'>Amina S., London</p>
              </div>
            </div>
            <div className='rounded-lg bg-gray-100 p-8 shadow-lg'>
              <p className='mb-4 text-lg'>
                'Our family vacation was made perfect by our stay at Ubuntu Hotel.
                The kids loved the pool, and we enjoyed the serene atmosphere.'
              </p>
              <div className='flex items-center justify-center'>
                <img
                  src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/testimonial-3-eg6384b-1764916586365.webp'
                  alt='Testimonial 3'
                  className='mr-4 h-12 w-12 rounded-full'
                />
                <p className='font-bold'>The Okoro Family, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='bg-gray-100 py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='mb-12 text-4xl font-bold'>Contact Us</h2>
          <form
            className='mx-auto max-w-lg text-left'
            onSubmit={handleContactSubmit}
          >
            <div className='mb-4'>
              <Input type='text' placeholder='Your Name' className='w-full' />
            </div>
            <div className='mb-4'>
              <Input type='email' placeholder='Your Email' className='w-full' />
            </div>
            <div className='mb-4'>
              <Textarea placeholder='Your Message' className='w-full' />
            </div>
            <Button
              type='submit'
              className='w-full bg-orange-500 hover:bg-orange-600'
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
