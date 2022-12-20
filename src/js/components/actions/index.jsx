import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

const Actions = ({
  filter,
  filterFiles,
  onOptions,
  onClose,
  onSetVisibleViewed,
  diffMarkers,
  onFilterDiffStats,
  diffStatsRange,
  toggleHideViewed,
  hideViewed
}) => {

  const filterDiffStats = (range) => {
    onFilterDiffStats(range)
  }

  const markerLabel = (marker, i) => {
    if (i == 0 || i == diffMarkers.length - 1) return marker + ' lines changed'
    else return marker
  }
  const sliderMarks = Object.fromEntries(diffMarkers.map((marker, i) => [marker, markerLabel(marker, i)]))

  const switchHideViewed = () => toggleHideViewed(!hideViewed)

  return (
    <div>
      <div className='actions'>
        <input type='text' value={filter} className='actions-filter' placeholder='Type to filter files' onChange={filterFiles} />

        <div className='actions-small-button'>
          <button onClick={onOptions} className='settings-button'>
            <span className='tooltipped tooltipped-s' aria-label='Show settings'>
              <svg className='octicon octicon-gear' viewBox='0 0 14 16' width='14' height='16' aria-hidden='true'>
                <path fillRule='evenodd' d='M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' />
              </svg>
            </span>
          </button>
        </div>

        <div className='actions-small-button'>
          <button onClick={onSetVisibleViewed(true)} title='Set visible as viewed'>
            <span className='tooltipped tooltipped-s' aria-label='Set visible as viewed'>
              <svg className='octicon octicon-checkbox' viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
                <path fillRule="evenodd" d="M2.5 2.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25V2.75zM2.75 1A1.75 1.75 0 0 0 1 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 13.25V2.75A1.75 1.75 0 0 0 13.25 1H2.75zm9.03 5.28a.75.75 0 0 0-1.06-1.06L6.75 9.19L5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" />
              </svg>
            </span>
          </button>
        </div>

        <div className='actions-small-button'>
          <button onClick={onSetVisibleViewed(false)} title='Set visible as not viewed'>
            <span className='tooltipped tooltipped-s' aria-label='Set visible as not viewed'>
              <svg className='octicon octicon-diff-removed' viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
                <path fillRule="evenodd"  d="M2.75 2.5h10.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25V2.75a.25.25 0 0 1 .25-.25zM13.25 1H2.75A1.75 1.75 0 0 0 1 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 13.25V2.75A1.75 1.75 0 0 0 13.25 1zm-2 7.75a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5h6.5z"/>
              </svg>
            </span>
          </button>
        </div>
        
        <div className='actions-small-button'>
          <button onClick={switchHideViewed} className='toggle-viewed-button'>
            <span className='tooltipped tooltipped-s' aria-label='Close'>{hideViewed ? 'Show Viewed' : 'Hide Viewed'}</span>
          </button>
        </div>

        <div className='actions-small-button'>
          <button onClick={onClose} className='close-button'>
            <span className='tooltipped tooltipped-s' aria-label='Close'>
              <svg className='octicon octicon-x' viewBox='0 0 12 16' width='12' height='16' aria-hidden='true'>
                <path fillRule='evenodd' d='M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z' />
              </svg>
            </span>
          </button>
        </div>


      </div>
      <div className="actions">
        <Slider
          range
          min={Math.min(...diffMarkers)}
          max={Math.max(...diffMarkers)}
          allowCross={false}
          defaultValue={[Math.min(...diffMarkers), Math.max(...diffMarkers)]}
          value={diffStatsRange}
          marks={sliderMarks}
          step={null}
          style={{ width: "70%", "margin": "auto" }}
          pushable
          onChange={filterDiffStats}
        />
      </div>
      <hr/>
    </div>
  )
}

export default Actions
