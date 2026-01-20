import React from 'react'
import { FileText, Upload, Download, Search, Filter, Eye, Share2, Trash2, Folder, Image, File, Archive, Music, Film, Calendar, Users, Lock, Unlock, Star, ChevronDown, Plus, Cloud, HardDrive, Database, Link, Copy, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { useState } from 'react'

const AttachmentsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)

  const fileTypes = [
    { id: 'all', label: 'All Files', count: 156, icon: FileText },
    { id: 'documents', label: 'Documents', count: 42, icon: File },
    { id: 'images', label: 'Images', count: 38, icon: Image },
    { id: 'archives', label: 'Archives', count: 24, icon: Archive },
    { id: 'media', label: 'Media', count: 31, icon: Film },
    { id: 'others', label: 'Others', count: 21, icon: FileText },
  ]

  const files = [
    {
      id: 1,
      name: 'Annual_Report_2023.pdf',
      type: 'documents',
      size: '4.2 MB',
      uploaded: '2024-01-15',
      uploader: 'John Mwangi',
      sector: 'Finance',
      access: 'public',
      downloads: 127,
      starred: true,
      extension: 'pdf',
      icon: '📄'
    },
    {
      id: 2,
      name: 'Project_Proposal_Template.docx',
      type: 'documents',
      size: '1.8 MB',
      uploaded: '2024-01-12',
      uploader: 'Sarah Ochieng',
      sector: 'Technology',
      access: 'members',
      downloads: 89,
      starred: false,
      extension: 'docx',
      icon: '📝'
    },
    {
      id: 3,
      name: 'Team_Photo_Gallery.zip',
      type: 'archives',
      size: '15.7 MB',
      uploaded: '2024-01-10',
      uploader: 'James Kamau',
      sector: 'Marketing',
      access: 'public',
      downloads: 45,
      starred: true,
      extension: 'zip',
      icon: '📁'
    },
    {
      id: 4,
      name: 'Conference_Presentation.pptx',
      type: 'documents',
      size: '8.3 MB',
      uploaded: '2024-01-08',
      uploader: 'Grace Akinyi',
      sector: 'Education',
      access: 'members',
      downloads: 156,
      starred: false,
      extension: 'pptx',
      icon: '📊'
    },
    {
      id: 5,
      name: 'Company_Logo.png',
      type: 'images',
      size: '2.1 MB',
      uploaded: '2024-01-05',
      uploader: 'Mike Omondi',
      sector: 'Design',
      access: 'public',
      downloads: 203,
      starred: true,
      extension: 'png',
      icon: '🖼️'
    },
    {
      id: 6,
      name: 'Meeting_Recordings.mp4',
      type: 'media',
      size: '124.5 MB',
      uploaded: '2024-01-03',
      uploader: 'Lisa Wambui',
      sector: 'Communications',
      access: 'members',
      downloads: 67,
      starred: false,
      extension: 'mp4',
      icon: '🎥'
    }
  ]

  const getTypeIcon = (type: string) => {
    const typeObj = fileTypes.find(t => t.id === type)
    return typeObj ? typeObj.icon : FileText
  }

  const getAccessIcon = (access: string) => {
    return access === 'public' ? Unlock : Lock
  }

  const getFileTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      documents: 'from-blue-500 to-blue-600',
      images: 'from-purple-500 to-purple-600',
      archives: 'from-orange-500 to-orange-600',
      media: 'from-green-500 to-green-600',
      others: 'from-gray-500 to-gray-600'
    }
    return colors[type] || colors.others
  }

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.uploader.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.sector.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'all' || file.type === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl">
              <Folder className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">File Repository</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Secure storage and sharing of documents, images, and media files
            </p>
          </div>
          
          {/* Controls */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search files, folders, or uploaders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all outline-none shadow-lg text-lg"
                />
              </div>
              <button 
                onClick={() => setUploadModalOpen(true)}
                className="btn-primary flex items-center gap-3 px-8 py-5 text-lg shadow-xl whitespace-nowrap"
              >
                <Upload className="w-6 h-6" />
                Upload Files
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {fileTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === type.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <type.icon className="w-5 h-5" />
                  {type.label} ({type.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Storage Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                <HardDrive className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">2.4 GB</div>
                <div className="text-gray-600">Used Storage</div>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-3/4"></div>
            </div>
            <div className="text-sm text-gray-500 mt-2">75% of 3.2 GB used</div>
          </div>
          
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                <Database className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">156</div>
                <div className="text-gray-600">Total Files</div>
              </div>
            </div>
          </div>
          
          <div className="card group hover:scale-105 transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                <Download className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">1,247</div>
                <div className="text-gray-600">Total Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFiles.map((file, index) => (
            <div 
              key={file.id}
              className="card group hover:scale-[1.02] transition-all duration-300 bg-white shadow-lg border border-gray-100 p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* File Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${getFileTypeColor(file.type)} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                  {file.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-purple-600 transition-colors">
                      {file.name}
                    </h3>
                    {file.starred && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold">{file.size}</span>
                    <span className="flex items-center gap-1">
                      {React.createElement(getAccessIcon(file.access), { className: "w-3 h-3" })}
                      {file.access}
                    </span>
                  </div>
                </div>
              </div>

              {/* File Details */}
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Uploaded by <span className="font-semibold">{file.uploader}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{file.uploaded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>{file.downloads} downloads</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  {file.sector}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group/view">
                  <Eye className="w-4 h-4 text-gray-600 group-hover/view:text-purple-500" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group/share">
                  <Share2 className="w-4 h-4 text-gray-600 group-hover/share:text-purple-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredFiles.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 text-lg shadow-xl">
              Load More Files
            </button>
          </div>
        )}

        {/* Upload Modal */}
        {uploadModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Upload Files</h2>
                <p className="text-gray-600">Share documents, images, and media with the community</p>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center mb-6 cursor-pointer hover:border-purple-500 transition-colors">
                <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop files here or click to browse</p>
                <p className="text-sm text-gray-500">Supports PDF, DOC, Images, Videos, and Archives</p>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 btn-primary py-3">
                  Select Files
                </button>
                <button 
                  onClick={() => setUploadModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AttachmentsPage