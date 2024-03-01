import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      image_url: 'https://example.com/image1.jpg',
      price: 10.99,
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      image_url: 'https://example.com/image2.jpg',
      price: 19.99,
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      image_url: 'https://example.com/image3.jpg',
      price: 7.5,
    },
    {
      name: 'Product 4',
      description: 'Description for Product 4',
      image_url: 'https://example.com/image4.jpg',
      price: 25.49,
    },
    {
      name: 'Product 5',
      description: 'Description for Product 5',
      image_url: 'https://example.com/image5.jpg',
      price: 15.75,
    },
    {
      name: 'Product 6',
      description: 'Description for Product 6',
      image_url: 'https://example.com/image6.jpg',
      price: 12.99,
    },
    {
      name: 'Product 7',
      description: 'Description for Product 7',
      image_url: 'https://example.com/image7.jpg',
      price: 8.0,
    },
    {
      name: 'Product 8',
      description: 'Description for Product 8',
      image_url: 'https://example.com/image8.jpg',
      price: 29.99,
    },
    {
      name: 'Product 9',
      description: 'Description for Product 9',
      image_url: 'https://example.com/image9.jpg',
      price: 5.49,
    },
    {
      name: 'Product 10',
      description: 'Description for Product 10',
      image_url: 'https://example.com/image10.jpg',
      price: 11.25,
    },
    {
      name: 'Product 11',
      description: 'Description for Product 11',
      image_url: 'https://example.com/image11.jpg',
      price: 17.99,
    },
    {
      name: 'Product 12',
      description: 'Description for Product 12',
      image_url: 'https://example.com/image12.jpg',
      price: 14.5,
    },
    {
      name: 'Product 13',
      description: 'Description for Product 13',
      image_url: 'https://example.com/image13.jpg',
      price: 9.99,
    },
    {
      name: 'Product 14',
      description: 'Description for Product 14',
      image_url: 'https://example.com/image14.jpg',
      price: 22.49,
    },
    {
      name: 'Product 15',
      description: 'Description for Product 15',
      image_url: 'https://example.com/image15.jpg',
      price: 6.75,
    },
    {
      name: 'Product 16',
      description: 'Description for Product 16',
      image_url: 'https://example.com/image16.jpg',
      price: 18.99,
    },
    {
      name: 'Product 17',
      description: 'Description for Product 17',
      image_url: 'https://example.com/image17.jpg',
      price: 13.5,
    },
    {
      name: 'Product 18',
      description: 'Description for Product 18',
      image_url: 'https://example.com/image18.jpg',
      price: 7.99,
    },
    {
      name: 'Product 19',
      description: 'Description for Product 19',
      image_url: 'https://example.com/image19.jpg',
      price: 24.49,
    },
    {
      name: 'Product 20',
      description: 'Description for Product 20',
      image_url: 'https://example.com/image20.jpg',
      price: 16.75,
    },
  ]);

  await app.close();
}
bootstrap();
