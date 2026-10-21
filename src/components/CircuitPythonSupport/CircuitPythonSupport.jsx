import { useBoardStore } from '@site/src/lib/stores/store';
import { Badge } from '@site/src/components/ui/badge';

// Nur auf Hardwareseiten mit CircuitPython-Unterstützung einsetzen.
export default function CircuitPythonSupport() {
  const board = useBoardStore((state) => state.board);

  if (board !== 'MCU-S2' && board !== ':edu S2') {
    return null;
  }

  return (
    <div className="mb-4 flex justify-center">
      <Badge
        variant="outline"
        className="border-gray-300 font-normal text-gray-600 dark:border-gray-600 dark:text-gray-300"
      >
        CircuitPython kompatibel
      </Badge>
    </div>
  );
}
