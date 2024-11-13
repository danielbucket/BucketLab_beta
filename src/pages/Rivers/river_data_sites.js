export const river_sites_list = [
  {
    siteNumber: '09260050',
    siteName: 'YAMPA RIVER AT DEERLODGE PARK, CO',
    siteType: 'Stream',
    agency: 'USGS',
    stateCd: 'CO'
  },
  {
    siteNumber: '09058000',
    siteName: 'COLORADO RIVER NEAR KREMMLING, CO',
    siteType: 'Stream',
    agency: 'USGS',
    stateCd: 'CO'
  },
  {
    siteNumber: '404417108524900',
    siteName: 'GREEN RIVER ABOVE GATES OF LODORE, CO',
    siteType: 'Stream',
    agency: 'USGS',
    stateCd: 'CO'
  },
  {
    siteNumber: '09128000',
    siteName: 'GUNNISON RIVER BELOW GUNNISON TUNNEL, CO',
    siteType: 'Stream',
    agency: 'USGS',
    stateCd: 'CO'
  },
  {
    siteNumber: '06719505',
    siteName: 'CLEAR CREEK AT GOLDEN, CO',
    siteType: 'Stream',
    agency: 'USGS',
    stateCd: 'CO'
  }
]

export function urlPathBuild() {
  let urlPath = 'https://waterservices.usgs.gov/nwis/iv/?sites='

  river_sites_list.map((site,ind) => {
    urlPath = urlPath + site.siteNumber

    if (ind < river_sites_list.length - 1) {
      urlPath = urlPath + ','
    }
  })

  return urlPath
}

