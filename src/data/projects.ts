import { ggmPreviewImage } from '../lib/urls'
import type { Project } from '../types'
import { featuredProjectOrder } from './featuredOrder'
import { googleSitesPreviewById } from './googleSitesPreviews'
import { liveUrlByProjectId } from './liveUrls'

const p = ggmPreviewImage

const googleSitesHighlights: Project[] = [
  {
    id: 'wheel-rush',
    name: 'Wheel Rush',
    domain: 'wheel-rush-mobile-tire-repair.mane-galaxygrowth.workers.dev',
    category: 'Mobile Tire Service',
    previewImage: googleSitesPreviewById['wheel-rush'],
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight Restoration',
    domain: 'clearcut-restoration.mane-galaxygrowth.workers.dev',
    category: 'Auto Services',
    previewImage: googleSitesPreviewById['headlight-restoration'],
  },
  {
    id: 'home-theater',
    name: 'Home Theater',
    domain: 'woodlands-hometheater.com',
    category: 'Home Services',
    previewImage: googleSitesPreviewById['home-theater'],
  },
  {
    id: 'pressure-washing',
    name: 'Pressure Washing',
    domain: 'gf-cleaning-services.mane-galaxygrowth.workers.dev',
    category: 'Pressure Washing',
    previewImage: googleSitesPreviewById['pressure-washing'],
  },
]

const projectList: Project[] = [
  { id: 'pelagic-pools', name: 'Pelagic Pools', domain: 'pelagicpools.com', category: 'Pool Cleaning', previewImage: p('Pelagic-Pools.png') },
  { id: 'jpl-construction', name: 'JPL Construction', domain: 'jplconstruction.com', category: 'Fence Contractor', previewImage: p('JPL-Construction.png') },
  { id: 'platinum-fire', name: 'Platinum Fire Protection', domain: 'platinumfireprotection.com', category: 'Fire Protection', previewImage: p('Platinum-Fire-Protection.png') },
  { id: 'collin-sprinkler', name: 'Collin County Sprinkler', domain: 'collincountysprinkler.com', category: 'Irrigation', previewImage: p('Collin-County-Sprinkler.png') },
  { id: 'accuracy-backflow', name: 'Accuracy Backflow', domain: 'accuracybackflow.com', category: 'Backflow Testing', previewImage: p('Accuracy-Backflow.png') },
  { id: 'ark-fence', name: 'Ark Fence Company', domain: 'arkfencecompany.com', category: 'Fence Contractor', previewImage: p('Ark-Fence.png') },
  { id: 'soho-trimlight', name: 'SoHo Trimlight', domain: 'sohotrimlight.com', category: 'Permanent Lighting', previewImage: p('SoHo-Trimlight.png') },
  { id: 'jireh-trees', name: 'Jireh Trees & Landscaping', domain: 'jirehtrees&landscaping.com', category: 'Tree Service', previewImage: p('Jireh-Trees.png') },
  { id: 'comfort-reigns', name: 'Comfort Reigns Group', domain: 'comfortreignsgroup.com', category: 'HVAC', previewImage: p('Comfort-Reigns-Group.png') },
  { id: 'one-love-detail', name: 'One Love Mobile Details', domain: 'onelovemobiledetails.com', category: 'Mobile Detailing', previewImage: p('One-Love-Mobile-Details.png') },
  { id: 'clearcut-auto', name: 'Clear Cut Automotive Restoration', domain: 'clearcutautomotiverestoration.com', category: 'Auto Restoration', previewImage: p('Clear-Cut-Automotive-Restoration.png') },
  { id: 'dmc-tire', name: 'DMC Tire Services', domain: 'dmctireservices.com', category: 'Tire Service', previewImage: p('DMC-Tire-Services.png') },
  { id: 'details-plus', name: 'Details Plus Auto Salon', domain: 'detailsplusautosalon.com', category: 'Auto Detailing', previewImage: p('Details-Plus-Auto-Salon.png') },
  { id: 'dominguez-details', name: 'Dominguez Details', domain: 'dominguezdetails.com', category: 'Auto Detailing', previewImage: p('Dominguez-Details.png') },
  { id: 'jp-mobile', name: 'JP Mobile Detailing', domain: 'jpmobiledetailing.com', category: 'Mobile Detailing', previewImage: p('JP-Mobile-Detailing.png') },
  { id: 'ajs-detail', name: "AJ's Auto Detailing", domain: "aj'sautodetailing.com", category: 'Auto Detailing', previewImage: p('Ajs-Auto-Detailing.png') },
  { id: 'pro-detailing', name: 'Pro Detailing', domain: 'prodetailing.com', category: 'Auto Detailing', previewImage: p('Pro-Detailing.png') },
  { id: 'lovely-view', name: 'Lovely View Auto Detailing', domain: 'lovelyviewautodetailing.com', category: 'Auto Detailing', previewImage: p('Lovely-View-Auto-Detailing.png') },
  { id: 'mr-express', name: 'Mr. Express Car Wash & Detail', domain: 'mr.expresscarwash&detail.com', category: 'Car Wash', previewImage: p('Mr-Express-Car-Wash-Detail.png') },
  { id: 'allied-roofing', name: 'Allied Roofing', domain: 'alliedroofing.com', category: 'Roofing', previewImage: p('Allied-Roofing.png') },
  { id: 'superior-roofing', name: 'Superior Roofing & Foam', domain: 'superiorroofing&foam.com', category: 'Roofing', previewImage: p('Superior-Roofing-and-Foam.png') },
  { id: 'done-right-roof', name: 'Done Right Roof & Gutters', domain: 'donerightroof&gutters.com', category: 'Roofing & Gutters', previewImage: p('Done-Right-Roof-And-Gutters.png') },
  { id: 'southeast-land', name: 'Southeast Land Pros', domain: 'southeastlandpros.com', category: 'Land Clearing', previewImage: p('Southeast-Land-Pros.png') },
  { id: 'sprinkler-dallas', name: 'The Sprinkler Specialist of Dallas', domain: 'thesprinklerspecialistofdallas.com', category: 'Sprinkler & Irrigation', previewImage: p('The-Sprinkler-Specialist-of-Dallas.png') },
  { id: 'sprinkler-dallas-v2', name: 'The Sprinkler Specialist of Dallas — v2', domain: 'thesprinklerspecialistofdallas-v2.com', category: 'Sprinkler & Irrigation', previewImage: p('The-Sprinkler-Specialist-of-Dallas-2.png') },
  { id: 'rl-landscape', name: 'RL Landscape', domain: 'rllandscape.com', category: 'Landscaping', previewImage: p('Rl-Landscape.png') },
  { id: 'texas-rain', name: 'Texas Rain Solutions', domain: 'texasrainsolutions.com', category: 'Drainage & Irrigation', previewImage: p('Texas-Rain-Solutions.png') },
  { id: 'safewater', name: 'Safewater Backflow & Irrigation', domain: 'safewaterbackflow&irrigation.com', category: 'Backflow & Irrigation', previewImage: p('Safewater-Backflow-And-Irrigation.png') },
  { id: 'wet-willie', name: "Wet Willie's Sprinkler Repair", domain: "wetwillie'ssprinklerrepair.com", category: 'Sprinkler & Irrigation', previewImage: p('wet-willies-sprinkler-repair-website.png') },
  { id: 'good-stewards', name: 'Good Stewards Lawn Company', domain: 'goodstewardslawncompany.com', category: 'Lawn Care', previewImage: p('Good-Stewards-Lawn-Company.png') },
  { id: 'stone-drywall', name: 'Stone Drywall Solutions', domain: 'stonedrywallsolutions.com', category: 'Drywall', previewImage: p('Stone-Drywall-Solutions.png') },
  { id: 'kangaroo', name: 'Kangaroo Contractors', domain: 'kangaroocontractors.com', category: 'General Contracting', previewImage: p('Kangaroo-Contractors.png') },
  { id: 'phoenix-driven', name: 'Phoenix Driven Services', domain: 'phoenixdrivenservices.com', category: 'Construction', previewImage: p('Phoenix-Driven-Services.png') },
  { id: 'freedom-construction', name: 'Freedom Construction & Design', domain: 'freedomconstruction&design.com', category: 'Construction & Design', previewImage: p('Freedom-Construction-And-Design.png') },
  { id: 'novella-homes', name: 'Novella Designer Homes', domain: 'novelladesignerhomes.com', category: 'Custom Home Builder', previewImage: p('Novella-Designer-Homes.png') },
  { id: 'millworks', name: 'Millworks Custom Buildings', domain: 'millworkscustombuildings.com', category: 'Custom Outdoor Structures', previewImage: p('Millworks-Custom-Buildings.png') },
  { id: 'texas-elegant', name: 'Texas Elegant Cleaning', domain: 'texaselegantcleaning.com', category: 'House Cleaning', previewImage: p('Texas-Elegant-Cleaning.png') },
  { id: 'bee-clean', name: 'Bee Clean Exterior Home Service', domain: 'beecleanexteriorhomeservice.com', category: 'Exterior Cleaning', previewImage: p('Bee-Clean-Exterior-Home-Service.png') },
  { id: 'classy-maids', name: 'Classy Maids 321', domain: 'classymaids321.com', category: 'Maid Service', previewImage: p('Classy-Maids-321.png') },
  { id: 'caliber-electric', name: 'Caliber Electric', domain: 'caliberelectric.com', category: 'Electrical', previewImage: p('Caliber-Electric.png') },
  { id: 'blue-bulb', name: 'Blue Bulb Electric', domain: 'bluebulbelectric.com', category: 'Electrical', previewImage: p('Blue-Bulb-Electric.png') },
  { id: 'sawyers-electric', name: "Sawyer's Electric", domain: "sawyer'selectric.com", category: 'Electrical', previewImage: p('Sawyers-Electric.png') },
  { id: 'woodlands-pool', name: 'The Woodlands Pool Cleaning', domain: 'thewoodlandspoolcleaning.com', category: 'Pool Service', previewImage: p('The-Woodlands-Pool-Cleaning.png') },
  { id: 'blue-shade', name: 'Blue Shade Pools', domain: 'blueshadepools.com', category: 'Pool Service', previewImage: p('Blue-Shade-Pools.png') },
  { id: 'iron-t', name: 'Iron T Fitness', domain: 'irontfitness.com', category: 'Fitness Studio', previewImage: p('Iron-T-Fitness.png') },
  { id: 'art-key', name: 'Art Key', domain: 'artkey.com', category: 'Locksmith', previewImage: p('Art-Key.png') },
  { id: 'fargos-art', name: "Fargo's Art", domain: "fargo'sart.com", category: 'Fine Art', previewImage: p('Fargos-Art.png') },
  { id: 'dfw-christmas', name: 'DFW Christmas Light Installs', domain: 'dfwchristmaslightinstalls.com', category: 'Holiday Lighting', previewImage: p('DFW-Christmas-Light-Installs.png') },
  { id: 'king-fence', name: 'King of Kings Fence', domain: 'kingofkingsfence.com', category: 'Fence Contractor', previewImage: p('King-Of-Kings-Fence.png') },
  { id: 'momentum', name: 'Momentum', domain: 'momentum.com', category: 'Fitness & Wellness', previewImage: p('Momentum.png') },
  { id: 'texatint', name: 'TexaTint', domain: 'texatint.com', category: 'Window Tinting', previewImage: p('TexaTint.png') },
  { id: 'in-stitches', name: 'In Stitches Drapery', domain: 'institchesdrapery.com', category: 'Drapery & Window Treatments', previewImage: p('In-Stitches-Drapery.png') },
  { id: 'ready-appliance', name: 'Ready Appliance', domain: 'readyappliance.com', category: 'Appliance Repair', previewImage: p('Ready-Appliance.png') },
  { id: 'radiant-home', name: 'Radiant Home Squad', domain: 'radianthomesquad.com', category: 'Home Services', previewImage: p('Radiant-Home-Squad.png') },
  { id: 'jr4u', name: 'JR4U', domain: 'jr4u.com', category: 'Pressure Washing', previewImage: p('Jr4u.png') },
  { id: 'k31-tire', name: 'K31 Mobile Tire', domain: 'k31mobiletire.com', category: 'Mobile Tire Service', previewImage: p('K31-Mobile-Tire.png') },
  { id: 'nside-out', name: 'Nside Out Detailing', domain: 'nsideoutdetailing.com', category: 'Mobile Detailing', previewImage: p('Nside-Out-Detailing.png') },
  ...googleSitesHighlights,
]

function featuredRank(id: string): number {
  const index = featuredProjectOrder.indexOf(id as (typeof featuredProjectOrder)[number])
  return index === -1 ? featuredProjectOrder.length + 1 : index
}

/** Google Sites highlights first, then other verified live, then alphabetical */
export const projects: Project[] = projectList
  .map((item) => ({
    ...item,
    previewImage: googleSitesPreviewById[item.id] ?? item.previewImage,
    liveUrl: liveUrlByProjectId[item.id],
  }))
  .sort((a, b) => {
    const featuredDiff = featuredRank(a.id) - featuredRank(b.id)
    if (featuredDiff !== 0) return featuredDiff
    const liveDiff = Number(Boolean(b.liveUrl)) - Number(Boolean(a.liveUrl))
    if (liveDiff !== 0) return liveDiff
    return a.name.localeCompare(b.name)
  })

export const verifiedLiveCount = projects.filter((item) => item.liveUrl).length

export const highlightedProjects = projects.filter((item) =>
  featuredProjectOrder.includes(item.id as (typeof featuredProjectOrder)[number]),
)