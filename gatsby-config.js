const Variables = require('./src/styles/variables.json')

const uses = require('./data/uses.json')
const skills = require('./data/skills.json')
const social = require('./data/social.json')
const person = require('./data/person.json')
const experience = require('./data/experience.json')
const education = require('./data/education.json')

module.exports = {
  pathPrefix: '/anilloutombam.github.io',
  siteMetadata: {
    title: `💻 ${person.name.first} ${person.name.last} - ${person.position}`,
    siteUrl: `https://${person.website}`,
    experience,
    education,
    person,
    skills,
    social,
    uses,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: 'UA-162796447-1',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: Variables.colors.accent,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`${Variables.font}\:400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: 'anilloutombam',
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@anilloutombam`,
      },
    },
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 100,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-extract-image-colors',
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/resume`],
      },
    },
  ],
}
