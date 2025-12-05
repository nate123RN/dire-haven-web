import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Conference Rooms',
    description:
      'State-of-the-art facilities for your business meetings and events, equipped with the latest technology.',
    imageUrl:
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/service-conference-bxqc7j3-1764916593651.webp',
  },
  {
    title: 'Swimming Pool',
    description:
      'Relax and unwind in our stunning infinity pool with breathtaking views of the city.',
    imageUrl:
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/service-pool-2lopcl2-1764916599902.webp',
  },
  {
    title: 'Exquisite Dining',
    description:
      'Experience a culinary journey with our selection of local and international dishes, prepared by world-class chefs.',
    imageUrl:
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/service-restaurant-yqwoarg-1764916611114.webp',
  },
  {
    title: 'Spa & Wellness',
    description:
      'Rejuvenate your body and soul with our wide range of spa treatments and wellness programs.',
    imageUrl:
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/56120f28-fcd6-4009-a665-e5130f629afc/service-spa-19jl9ue-1764916617829.webp',
  },
];

const ServicesPage = () => {
  return (
    <div className='container mx-auto py-20'>
      <h1 className='mb-12 text-center text-4xl font-bold'>Our Services</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
        {services.map((service, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg bg-white shadow-lg'
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className='h-64 w-full object-cover'
            />
            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold'>{service.title}</h2>
              <p className='mb-4 text-gray-700'>{service.description}</p>
              <Button className='bg-orange-500 hover:bg-orange-600'>
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
