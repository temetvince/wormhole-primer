// content.js

import React from 'react';

/**
 * Function to get an array of pages with content
 * @param setCurrentPage - Function to set the current page
 * @returns Array of pages with content
 */
export const getPages = (
  setCurrentPage: (value: React.SetStateAction<number> | number) => void,
) => [
  {
    id: 'toc',
    title: 'Title and Table of Contents',
    content: (
      <>
        <h1>
          Beyond the Event Horizon
          <br />
          <small>A Primer for Wormhole Dwelling</small>
        </h1>
        <h3 className='author'>by Lance Westar</h3>
        <h2>Table of Contents</h2>
        <ol>
          <li>
            <button
              onClick={() => {
                setCurrentPage(2);
              }}
            >
              Getting Started
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(3);
              }}
            >
              Main Game Loop
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(4);
              }}
            >
              Earning ISK in Wormhole Space
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(5);
              }}
            >
              Bookmarking
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(6);
              }}
            >
              Wormhole Info
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(7);
              }}
            >
              Survival Tips
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(8);
              }}
            >
              Markets (Jump Clones)
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(9);
              }}
            >
              Roles in the Corp
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(10);
              }}
            >
              Warfare Notes
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(11);
              }}
            >
              Implants
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(12);
              }}
            >
              From HS to NS and Back through Pochven
            </button>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: (
      <>
        <h2 id='getting-started'>Getting Started</h2>
        <p>
          The essential preparations and login habits to get set up safely in
          wormhole space before and after joining a corporation.
        </p>
        <h3>Preparation Before Joining</h3>
        <ul>
          <li>
            Before Arrival: Go to a major market hub (preferably Jita or Amarr)
            and make that your home station. You can't respawn inside wormhole
            space.
          </li>
          <li>When You Arrive: Use Jump Clones to backup your good clone.</li>
          <li>
            After You Arrive: Install Jump Clones in major market hubs to
            maximize returnability home if podded.
          </li>
        </ul>
        <h3>What to Bring</h3>
        <ul>
          <li>
            <strong>MINIMUM:</strong> A ship fit for scanning and exploration
            (e.g., Covert Ops Frigate, Astero, Stratios, or T3 Strategic
            Cruiser).
          </li>
          <li>
            <strong>RECOMMENDED:</strong> A ship fit for huffing (e.g., Venture
            or Prospect).
          </li>
          <li>
            <strong>OPTIONAL:</strong> A ship fit for ratting (e.g., T3
            Strategic Cruiser, Praxis, Heavy Assault Cruiser, or Marauder. Don't
            forget Salvagers).
          </li>
          <li>
            <strong>SITUATIONAL:</strong> A ship fit for hauling and industry
            (e.g., DST or a Blockade Runner).
          </li>
          <li>
            <strong>DIPLOMACY:</strong> A ship fit for PvP (ask for corporation
            doctrine).
          </li>
        </ul>
        <h3>When Logging In</h3>
        <ul>
          <li>
            Always join the corporate fleet when logged in. If the fleet does
            not exist, then create it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'main-game-loop',
    title: 'Main Game Loop',
    content: (
      <>
        <h2 id='main-game-loop'>Main Game Loop</h2>
        <p>
          The standard daily activities that keep your wormhole operations
          running smoothly.
        </p>
        <ol>
          <li>
            Check if home has any new signatures (sigs). If not, move onto the
            statics and do the same thing there.
          </li>
          <li>
            If everything's clear, pick an unscanned wormhole (a leaf in the
            tree, usually) and start scanning that.
          </li>
          <li>
            After you're tired of scanning, you can do the PVE sites you've
            scanned already: gas, relic, and data sites, and some combats if
            you've got the skills for it.
          </li>
          <li>
            Don't forget about your Industry and Planetary Industry jobs/tasks,
            etc.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'earning-isk',
    title: 'Earning ISK in Wormhole Space',
    content: (
      <>
        <h2 id='earning-isk'>Earning ISK in Wormhole Space</h2>
        <p>
          The most reliable and situational ways to make money while living in
          wormhole space.
        </p>
        <ul>
          <li>Not discussed but recommended: Planetary Industry.</li>
        </ul>
        <h3>Consistent ISK</h3>
        <ul>
          <li>Risk (decreasing): Ratting &gt; Huffing &gt; Mining</li>
          <li>Reward (decreasing): Ratting &gt; Huffing &gt; Mining</li>
        </ul>
        <h4>Huffing</h4>
        <ul>
          <li>
            Optimal Setup: T2 + Faction Prospect or Covetor + boosts in a good
            cloud can yield 100-150m ISK/hr.
          </li>
          <li>
            If using a &gt;2600m/s agile Venture or Prospect, try orbiting cloud
            at 500m with MWD on to kite the rats.
            <ul>
              <li>
                Huff smaller radius clouds before the rats appear, then
                transition to the larger radius cloud.
              </li>
              <li>
                Vital rats are deadly to this strategy. Avoid unless prepared.
              </li>
            </ul>
          </li>
        </ul>
        <h4>Ratting</h4>
        <ul>
          <li>
            C1-2: Inferior and not worth your time if you can do exploration or
            huffing.
          </li>
          <li>
            C3: Up to 200-250m ISK/hr in a Heavy Assault Cruiser; can almost
            double if blitzing in a Marauder (advised against).
          </li>
          <li>C4: Good money.</li>
          <li>
            C5: Great money if soloing in marauders or running 3
            Leshaks/Nestors.
          </li>
        </ul>
        <h3>Inconsistent ISK</h3>
        <ul>
          <li>Risk (decreasing): Relic &gt; Data</li>
          <li>Reward (decreasing): Relic &gt; Data</li>
        </ul>
        <h4>Relic/Data Sites</h4>
        <p>
          Key strategies and rules for successfully hacking relic and data sites
          in wormholes.
        </p>
        <h5>Core Node Placement</h5>
        <ul>
          <li>The Core node will always be near at least one hostile node.</li>
          <li>
            Hostile nodes will never spawn in a spot connected to all six
            surrounding spots unless the Core node is one of its neighbors.
          </li>
          <li>
            The Core node will be six or more spots away from your spawn unless
            you spawn in a position where every spot is closer than six (even if
            unconnected). In such cases, the Core node can spawn at any random
            spot, even next to your spawn.
          </li>
        </ul>
        <h5>General Advice</h5>
        <ul>
          <li>
            Use the wrench item before your virus takes damage to increase
            health above the starting value.
          </li>
          <li>
            Save the Shields and Kernel Rot (damage item) for critical
            situations. It's often better to try another path if you encounter a
            hostile node than to brute force through it.
          </li>
          <li>
            Use the "Secondary Vectors" item to kill the hostile node that
            reduces your attack power within three turns, during which you can
            explore other nodes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'bookmarking',
    title: 'Bookmarking',
    content: (
      <>
        <h2 id='bookmarking'>Bookmarking</h2>
        <p>
          Opinionated practices for creating and managing bookmarks to stay
          organized and safe in wormhole chains.
        </p>
        <ul>
          <li>
            <strong>Naming Conventions:</strong>
            <ul>
              <li>
                ".C4s SIG Last3DigitsOfName &lt;4hrs": . = homeward bound; s =
                static; &lt;4hrs = End of Life
              </li>
            </ul>
          </li>
          <li>
            <strong>Save Sites:</strong> Save under Signatures and wormholes
            under Wormholes.
          </li>
          <li>
            <strong>Bookmark Duration:</strong> Only save bookmarks for 2 days
            maximum.
          </li>
          <li>
            <strong>Wormhole Return:</strong> If you go through a hole, bookmark
            the return.
          </li>
          <li>
            <strong>Saving Methods:</strong> Only save WH by clicking on them
            from the Overview or in the 3D view for accuracy. It's okay to save
            Signatures from the scanner view as the loss of accuracy is minimal.
          </li>
          <li>
            Before jumping through a bookmarked wormhole with an unknown
            destination, right click the bookmark, and click Edit Location.
            Leave that window open while you jump.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'wormhole-info',
    title: 'Wormhole Info',
    content: (
      <>
        <h2 id='wormhole-info'>Wormhole Info</h2>
        <p>
          Essential wormhole mechanics, types, indicators, and identification
          tips.
        </p>
        <h3>General Notes</h3>
        <ul>
          <li>
            K162 means the hole was rolled into (at least 1 ship has come
            through).
          </li>
          <li>
            If a static is rolled and no one warps to it, then it will never
            open.
          </li>
          <li>
            If a static is rolled and no one enters it but does warp to it, then
            it may open if &lt;15 hours remaining, and it will open if &lt;4
            hours remaining (24 hour lifetime).
          </li>
          <li>
            C1 and C3 don't have j-space statics and C5+ don't have k-space
            statics.
          </li>
        </ul>
        <h3>Security Levels</h3>
        <ul>
          <li>Unknown: C1/C2/C3</li>
          <li>Dangerous Unknown: C4/C5</li>
          <li>Deadly Unknown: C6</li>
          <li>High Security: Hisec</li>
          <li>Low Security: Lowsec</li>
          <li>Null Security: Nullsec</li>
          <li>Triglavian Space: Pochven</li>
        </ul>
        <h3>Wormhole Lifespan</h3>
        <ul>
          <li>Less than 1 day remaining (fresh)</li>
          <li>Less than 4 hours remaining (end of life)</li>
          <li>Less than 1 hour remaining</li>
          <li>Expired, closure imminent</li>
        </ul>
        <h3>Mass Remaining</h3>
        <ul>
          <li>Not Yet: Over 50% (Fresh)</li>
          <li>Not to a Critical Degree: Between 50% and 10% (Shrink)</li>
          <li>Stability Critically Disrupted: Less than 10% (Crit)</li>
        </ul>
        <h3>Ship Passage</h3>
        <ul>
          <li>
            Very Large Ships: All ships except for Titans and supercarriers can
            pass through.
          </li>
          <li>
            Larger Ships: Battleships, Orcas, and smaller ships can pass
            through.
          </li>
          <li>
            Up to Medium Size Ships: Unplated Nestors, battlecruisers, and
            smaller ships can pass through.
          </li>
          <li>
            Only the Smallest Ships: Only frigates, destroyers, or specially fit
            HICs can pass through.
          </li>
        </ul>
        <h3>Viewing Tip for Visual Identification</h3>
        <ul>
          <li>
            Rotate the camera around the wormhole; features aren't always
            visible from all angles.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'survival-tips',
    title: 'Survival Tips',
    content: (
      <>
        <h2 id='survival-tips'>Survival Tips</h2>
        <p>
          Practical advice to stay alive and avoid common threats while
          operating in wormholes.
        </p>
        <ul>
          <li>
            <strong>Stay Aligned:</strong> Unless stationary, always keep your
            ship aligned to a celestial object or safe spot to warp out quickly.
          </li>
          <li>
            <strong>Watch D-Scan:</strong> Continuously use the directional
            scanner to check for enemy ships and probes.
          </li>
          <li>
            <strong>Use Safe Spots:</strong> Create safe spots in systems to
            hide and observe before engaging in activities.
          </li>
          <li>
            <strong>Cloak When Possible:</strong> Use cloaking devices on
            appropriate ships to avoid detection.
          </li>
          <li>
            <strong>Avoid Predictable Routes:</strong> Don't use the same routes
            repeatedly to reduce the chance of ambush.
          </li>
          <li>Null Sec holes rarely receive traffic.</li>
          <li>Don't PVE in holes with lots of K162 connections.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'markets',
    title: 'Markets (Jump Clones)',
    content: (
      <>
        <h2 id='markets'>Markets (Jump Clones)</h2>
        <p>
          The main market hubs where you should set up jump clones for easy
          reshipping and return trips.
        </p>
        <ul>
          <li>
            <strong>Jita IV - Moon 4 - Caldari Navy Assembly Plant:</strong>{' '}
            Most popular market hub, located in Caldari space.
          </li>
          <li>
            <strong>Amarr VIII (Oris) - Emperor Family Academy:</strong> Fairly
            popular, located in Amarr space.
          </li>
          <li>
            <strong>
              Dodixie IX - Moon 20 - Federation Navy Assembly Plant:
            </strong>{' '}
            Largest Gallente market hub.
          </li>
          <li>
            <strong>Rens VI - Moon 8 - Brutor Tribe Treasury:</strong> Minmatar
            hub.
          </li>
          <li>
            <strong>Hek VIII - Moon 12 - Boundless Creation Factory:</strong>{' '}
            Minmatar hub.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'roles',
    title: 'Roles in the Corp',
    content: (
      <>
        <h2 id='roles'>Roles in the Corp</h2>
        <p>The main roles players fill in a wormhole corporation.</p>
        <ul>
          <li>
            <strong>Scout:</strong> Responsible for scanning and finding
            wormholes and sites.
          </li>
          <li>
            <strong>Combat Pilot:</strong> Engages in PvE and PvP combat,
            defending the corp's assets and attacking enemies.
          </li>
          <li>
            <strong>Industrialist:</strong> Focuses on mining, manufacturing,
            and resource management.
          </li>
          <li>
            <strong>Logistics Pilot:</strong> Provides remote repairs and
            support during fleet operations.
          </li>
          <li>
            <strong>Tackler:</strong> Specializes in pinning down enemy ships
            during engagements.
          </li>
          <li>
            <strong>Bubbler:</strong> Deploys warp disruption fields to prevent
            enemy ships from escaping.
          </li>
          <li>
            <strong>EWar:</strong> Disrupts enemy ships by jamming targeting
            systems, reducing sensor strength, and more.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'warfare-notes',
    title: 'Warfare Notes',
    content: (
      <>
        <h2 id='warfare-notes'>Warfare Notes</h2>
        <h3>EWAR</h3>
        <p>
          Quickly identify and apply the correct electronic warfare module based
          on ship type.
        </p>
        <p>
          Look at the color of the ship background in the Overview and jam using
          the matching colored module:
        </p>
        <ul>
          <li>
            <strong>Amarr:</strong> Radar (Yellow background)
          </li>
          <li>
            <strong>Caldari:</strong> Gravimetric (Blue background)
          </li>
          <li>
            <strong>Gallente:</strong> Magnetometric (Turquoise background)
          </li>
          <li>
            <strong>Minmatar:</strong> Ladar (Red background)
          </li>
        </ul>
        <h3>Tanking</h3>
        <p>The preferred tank type for each faction.</p>
        <ul>
          <li>Amarr → Armor</li>
          <li>Caldari → Shield</li>
          <li>Gallente → Structure</li>
          <li>Minmatar → Speed</li>
        </ul>
        <h3>Resistance Holes (1st / 2nd)</h3>
        <p>
          The primary and secondary resistance holes for different tank types
          and factions.
        </p>
        <ul>
          <li>T1 Shield → EM / Thermal</li>
          <li>T1 Armor → Explosive / Kinetic</li>
          <li>Amarr → Thermal / EM</li>
          <li>Caldari → EM / Explosive</li>
          <li>Gallente → Explosive / EM</li>
          <li>Minmatar → Kinetic / Explosive</li>
        </ul>
        <h3>Missiles for Kinetic Bonus Ships</h3>
        <p>
          The best missile types to use on kinetic-bonus ships for different
          scenarios.
        </p>
        <ul>
          <li>Scourge Rage - DPS</li>
          <li>Scourge Javelin - Range</li>
          <li>Caldari Navy Scourge - Application</li>
          <li>Mjolnir Rage - EM DPS</li>
          <li>Mjolnir Javelin - EM Range</li>
          <li>Caldari Navy Mjolnir - EM Application</li>
        </ul>
      </>
    ),
  },
  {
    id: 'implants',
    title: 'Implants',
    content: (
      <>
        <h2 id='implants'>Implants</h2>
        <p>
          The most useful implants for exploration, huffing, and general
          training.
        </p>
        <h3>Exploration</h3>
        <ul>
          <li>Poteque 'Prospector' Astrometric Rangefinding</li>
          <li>Poteque 'Prospector' Astrometric Pinpointing</li>
          <li>Poteque 'Prospector' Astrometric Acquisition</li>
        </ul>
        <h3>Huffing</h3>
        <ul>
          <li>Eifyr and Co. 'Alchemist' Gas Harvesting</li>
        </ul>
        <h3>Ratting</h3>
        <ul>
          <li>Crystal Alpha</li>
          <li>Crystal Beta</li>
          <li>Crystal Delta</li>
          <li>Crystal Epsilon</li>
          <li>Crystal Gamma</li>
          <li>Crystal Omega</li>
        </ul>
        <h3>Training</h3>
        <h4>Recommended</h4>
        <ul>
          <li>Ocular Filter - Perception</li>
          <li>Memory Augmentation - Memory</li>
          <li>Neural Boost - Willpower</li>
          <li>Cybernetic Subprocessor - Intelligence</li>
          <li>Social Adaptation Chip - Charisma</li>
        </ul>
        <h4>Optional</h4>
        <ul>
          <li>
            Eifyr and Co. 'Alchemist' Biology - Longer booster duration
            <ul>
              <li>
                <strong>NOTE:</strong> Biology V Skill: Increases the duration
                of combat boosters and cerebral accelerators
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'pochven',
    title: 'From HS to NS and Back through Pochven',
    content: (
      <>
        <h2 id='pochven'>From HS to NS and Back through Pochven</h2>
        <p>
          The specific filaments needed to travel between high-sec, null-sec,
          and Pochven.
        </p>
        <ul>
          <li>
            <strong>To NS (quieter systems):</strong> Noise-5 'Needlejack'
            Filament
          </li>
          <li>
            <strong>To NS (active systems):</strong> Signal-5 'Needlejack'
            Filament
          </li>
          <li>
            <strong>To Pochven:</strong> Border-5 'Pochven' Filament
          </li>
          <li>
            <strong>To HS (or sometimes LS):</strong> Glorification-1 'Devana'
            Filament
          </li>
        </ul>
      </>
    ),
  },
];
