import * as pulumi from '@pulumi/pulumi'
import * as gcp from '@pulumi/gcp'

// create a pulumi A record in GCP Cloud DNS
new gcp.dns.RecordSet('vercel-ip', {
  name: 'academeez.com.',
  type: 'A',
  ttl: 300,
  managedZone: 'academeez',
  rrdatas: ['76.76.21.21'],
})

// create a pulumi CNAME record in GCP Cloud DNS
new gcp.dns.RecordSet('vercel-cname', {
  name: 'www.academeez.com.',
  type: 'CNAME',
  ttl: 300,
  managedZone: 'academeez',
  rrdatas: ['cname.vercel-dns.com.'],
})
