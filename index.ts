import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create User
  /*
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@gmail.com',
    },
  });
  console.log(user);
  */
  // Get all users
  /*
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  console.log(users);
  */

  // Create article and add to user
  /*
  const article = await prisma.article.create({
    data: {
      title: 'John First Article',
      body: 'This is Johns first article',
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);
  */
  // Get all articles
  /*
    const articles = await prisma.article.findMany()

    console.log(articles);
    /*
    

  // Create user and article and associate
  /*
  const user = await prisma.user.create({
    data: {
      name: 'Sara Smith',
      email: 'sara@gmail.com',
      articles: {
        create: {
          title: 'Sarahs First Article',
          body: 'This is Sarahs First Article',
        },
      },
    },
  });
  console.log(user);
  */
  // Create another article and add to user
  /*
  const article = await prisma.article.create({
    data: {
      title: 'Sarah Second Article',
      body: 'This is Sarahs second article',
      author: {
        connect: {
          id: 2,
        },
      },
    },
  });
  console.log(article);
  */

  //  All articles for a specific user
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  users.forEach((user) => {
    console.log(`User: ${user.name}, Email: ${user.email} `);
    console.log('Articles: ');
    user.articles.forEach((article) => {
      console.log(`- Title: ${article.title}, Body: ${article.body}`);
    });
    console.log('\n');
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
