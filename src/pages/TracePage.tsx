import TraceHero from '@/sections/TraceHero';
import TraceExample from '@/sections/TraceExample';
import TracePipeline from '@/sections/TracePipeline';
import TraceStages from '@/sections/TraceStages';
import TracePlayground from '@/sections/TracePlayground';
import TraceDocs from '@/sections/TraceDocs';
import TraceDownload from '@/sections/TraceDownload';
import TraceReleases from '@/sections/TraceReleases';
import Footer from '@/components/Footer';

export default function TracePage() {
  return (
    <>
      <TraceHero />
      <TraceExample />
      <TracePipeline />
      <TraceStages />
      <TracePlayground />
      <TraceDocs />
      <TraceDownload />
      <TraceReleases />
      <Footer variant="trace" />
    </>
  );
}
