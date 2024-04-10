import { DocumentBuilder } from '@nestjs/swagger';

export default () => {
  return new DocumentBuilder()
    .setTitle('My Games Reviews')
    .setDescription('Just a test')
    .setVersion('1.0')
    .addTag('games_reviews')
    .build();
};
