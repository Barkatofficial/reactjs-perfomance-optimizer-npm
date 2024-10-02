import React, { Profiler } from 'react';

function onRenderCallback(
  id, // ID of the component that just rendered
  phase, // Mount or update phase
  actualDuration, // Time spent rendering the component
  baseDuration, // Ideal time spent rendering without bottlenecks
  startTime, // When React started rendering this update
  commitTime, // When React committed the update
  interactions // Interactions tracked when this update was scheduled
) {
  console.log(`[${id}] ${phase} phase:`);
  console.log(`Actual duration: ${actualDuration}`);
  console.log(`Base duration: ${baseDuration}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
}

export const PerformanceTracker = ({ children }) => {
  return (
    <Profiler id="PerformanceTracker" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
};
