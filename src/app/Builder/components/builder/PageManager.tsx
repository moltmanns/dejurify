'use client'

import React, { useState } from 'react';
import { useBuilder } from '@/app/Builder/context';
import { Button } from '@/app/Builder/components/ui/button';
import { Input } from '@/app/Builder/components/ui/input';
import { Label } from '@/app/Builder/components/ui/label';
import { ScrollArea } from '@/app/Builder/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/app/Builder/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/Builder/components/ui/dropdown-menu";
import { FileText, Plus, MoreVertical, Trash, Edit, Eye, Globe } from 'lucide-react';

export const PageManager: React.FC = () => {
  const { pages, currentPage, setCurrentPage, createNewPage, deletePage, updatePage, previewPage, publishSite } = useBuilder();
  const [newPageOpen, setNewPageOpen] = useState(false);
  const [editPageOpen, setEditPageOpen] = useState(false);
  const [newPageName, setNewPageName] = useState('');
  const [newPageSlug, setNewPageSlug] = useState('');
  const [editingPage, setEditingPage] = useState<{ id: string; name: string; slug: string } | null>(null);

  const handleCreatePage = () => {
    if (!newPageName.trim()) return;
    
    createNewPage(
      newPageName,
      newPageSlug.trim() || newPageName.trim().toLowerCase().replace(/\s+/g, '-')
    );
    
    setNewPageName('');
    setNewPageSlug('');
    setNewPageOpen(false);
  };

  const handleEditPage = () => {
    if (!editingPage || !editingPage.name.trim()) return;
    
    updatePage(editingPage.id, {
      name: editingPage.name,
      slug: editingPage.slug.trim() || editingPage.name.trim().toLowerCase().replace(/\s+/g, '-'),
    });
    
    setEditingPage(null);
    setEditPageOpen(false);
  };

  const handlePageSelect = (page: any) => {
    setCurrentPage(page);
  };

  const openEditDialog = (page: any) => {
    setEditingPage({
      id: page.id,
      name: page.name,
      slug: page.slug,
    });
    setEditPageOpen(true);
  };

  const handleDeletePage = (id: string) => {
    deletePage(id);
  };

  return (
    <div className="h-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-sm font-semibold">Pages</h2>
        <div className="flex items-center gap-2">
          <Dialog open={newPageOpen} onOpenChange={setNewPageOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                New Page
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Page</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="page-name">Page Name</Label>
                  <Input
                    id="page-name"
                    value={newPageName}
                    onChange={(e) => {
                      setNewPageName(e.target.value);
                      if (!newPageSlug) {
                        setNewPageSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                      }
                    }}
                    placeholder="e.g., Home Page"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="page-slug">Page URL Slug</Label>
                  <Input
                    id="page-slug"
                    value={newPageSlug}
                    onChange={(e) => setNewPageSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                    placeholder="e.g., home-page"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    This will be used in the URL: /pages/{newPageSlug || 'page-slug'}
                  </p>
                </div>
                <Button
                  onClick={handleCreatePage}
                  disabled={!newPageName.trim()}
                  className="w-full"
                >
                  Create Page
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="default" 
            size="sm" 
            className="bg-legal-navy hover:bg-legal-navy/90"
            onClick={() => publishSite()}
          >
            <Globe className="h-4 w-4 mr-1" />
            Publish Site
          </Button>
        </div>
      </div>
      
      <Dialog open={editPageOpen} onOpenChange={setEditPageOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Page</DialogTitle>
          </DialogHeader>
          {editingPage && (
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="edit-page-name">Page Name</Label>
                <Input
                  id="edit-page-name"
                  value={editingPage.name}
                  onChange={(e) => setEditingPage({ ...editingPage, name: e.target.value })}
                  placeholder="e.g., Home Page"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-page-slug">Page URL Slug</Label>
                <Input
                  id="edit-page-slug"
                  value={editingPage.slug}
                  onChange={(e) => setEditingPage({ 
                    ...editingPage, 
                    slug: e.target.value.toLowerCase().replace(/\s+/g, '-') 
                  })}
                  placeholder="e.g., home-page"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  This will be used in the URL: /pages/{editingPage.slug || 'page-slug'}
                </p>
              </div>
              <DialogFooter>
                <Button
                  onClick={handleEditPage}
                  disabled={!editingPage.name.trim()}
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <ScrollArea className="flex-1">
        <div className="p-4">
          {pages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No pages created yet
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Create a new page to get started
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className={cn(
                    'flex items-center justify-between py-2 px-3 rounded-md',
                    currentPage?.id === page.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <div 
                    className="flex-1 flex items-center cursor-pointer" 
                    onClick={() => handlePageSelect(page)}
                  >
                    <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{page.name}</div>
                      <div className="text-xs truncate opacity-80">/{page.slug}</div>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={cn(
                          "h-8 w-8",
                          currentPage?.id === page.id 
                            ? "hover:bg-primary-700 text-primary-foreground" 
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        )}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem onClick={() => previewPage(page.id)}>
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openEditDialog(page)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-500 focus:text-red-500">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Page</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{page.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeletePage(page.id)} className="bg-red-500 hover:bg-red-600">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
