'use client'
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BuilderProvider } from '@/app/Builder/context';
import { ComponentLibrary } from '@/app/Builder/components/builder/library/ComponentLibrary';
import { PreviewArea } from '@/app/Builder/components/builder/PreviewArea';
import { PropertyEditor } from '@/app/Builder/components/builder/PropertyEditor';
import { LayerNavigator } from '@/app/Builder/components/builder/LayerNavigator';
import { PageManager } from '@/app/Builder/components/builder/PageManager';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/Builder/components/ui/tabs';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/app/Builder/components/ui/resizable';
import { Save } from 'lucide-react';
import { useBuilder } from '@/app/Builder/context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';

const BuilderInner = () => {
  const { savePage, currentPage } = useBuilder();
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
        <div className="flex justify-between items-center mx-auto">
          <div className="text-2xl font-serif font-bold text-legal-navy dark:text-white">
            <img src={'/assets/main-dark 1.png'} className="h-6 w-full" />
          </div>
          <div className="flex items-center gap-6">
            {/* Dashboard Confirmation Button */}
            <Button variant="outline" onClick={() => setShowDialog(true)} className='cursor-pointer'>
              Admin Dashboard
            </Button>

            <Button
              onClick={savePage}
              disabled={!currentPage}
              className="cursor-pointer"
            >
              <Save className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <Tabs defaultValue="pages">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="pages">Pages</TabsTrigger>
                <TabsTrigger value="components">Library</TabsTrigger>
                <TabsTrigger value="layers">Layers</TabsTrigger>
              </TabsList>
              <TabsContent value="pages" className="h-[calc(100vh-120px)]">
                <PageManager />
              </TabsContent>
              <TabsContent value="components" className="h-[calc(100vh-120px)]">
                <ComponentLibrary />
              </TabsContent>
              <TabsContent value="layers" className="h-[calc(100vh-120px)]">
                <LayerNavigator />
              </TabsContent>
            </Tabs>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={50}>
            <PreviewArea />
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
            <PropertyEditor />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>

      {/* Confirm Navigation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Unsaved Changes
            </DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Are you sure you want to return to the dashboard? Any unsaved changes will be lost.
          </p>

          <DialogFooter className="mt-6 flex justify-center gap-4">
            <Button variant="ghost" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => router.push('/Dashboard')} className='cursor-pointer'>
              Leave Without Saving
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Builder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BuilderProvider>
        <BuilderInner />
      </BuilderProvider>
    </DndProvider>
  );
};

export default Builder;
