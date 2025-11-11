import ThemedImageBackground from '@/components/styled-image-background';
import TimesList from '@/components/times-list';

const MagicKingdom = () => {
  return (
    <ThemedImageBackground source={require('@/assets/images/mk.jpg')}>
      <TimesList times={['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM']} />
    </ThemedImageBackground>
  );
};

export default MagicKingdom;
