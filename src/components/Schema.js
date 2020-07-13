import React from 'react'
import PropTypes from 'prop-types'

const Schema = ({
  name,
  address,
  email,
  phone1: telephone,
  phone2: telephone,
  url,
  logoUrl: logo,
  type,
  openingHours
}) => {
  // see http://schema.org/docs/schemas.html
  // test https://search.google.com/structured-data/testing-tool

  const data = {
    '@context': 'http://schema.org/',
    '@type': type,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address
    },
    name,
    email,
    telephone,
    url,
    openingHours,
    logo
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

Schema.propTypes = {
  type: PropTypes.string, // schema type e.g. LocalBusiness
  name: PropTypes.string,
  url: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone1: PropTypes.string,
  phone2: PropTypes.string,
  logoUrl: PropTypes.string
}

export default Schema
